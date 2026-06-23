# -*- coding: utf-8 -*-
"""把 public/playground/ 里过大的图片等比缩到长边 1600，备份原图到仓库外。"""
import os, shutil
from PIL import Image

SRC = "public/playground"
BACKUP = "../_playground_originals_backup"
MAX_EDGE = 1600
JPG_Q = 82
THRESH = 800 * 1024  # 只处理 >800KB 的

os.makedirs(BACKUP, exist_ok=True)
total_before = total_after = 0

for name in sorted(os.listdir(SRC)):
    path = os.path.join(SRC, name)
    if not os.path.isfile(path):
        continue
    ext = name.lower().rsplit(".", 1)[-1]
    if ext not in ("jpg", "jpeg", "png"):
        continue
    before = os.path.getsize(path)
    total_before += before
    if before < THRESH:
        total_after += before
        print(f"skip  {name}  ({before//1024}KB, 已够小)")
        continue
    # 备份原图
    shutil.copy2(path, os.path.join(BACKUP, name))
    im = Image.open(path)
    w, h = im.size
    scale = min(1.0, MAX_EDGE / max(w, h))
    if scale < 1.0:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    if ext == "png":
        im.save(path, optimize=True)
    else:
        if im.mode in ("RGBA", "P"):
            im = im.convert("RGB")
        im.save(path, quality=JPG_Q, optimize=True, progressive=True)
    after = os.path.getsize(path)
    total_after += after
    print(f"压缩  {name}  {before//1024}KB -> {after//1024}KB  ({w}x{h} -> {im.size[0]}x{im.size[1]})")

print(f"\n总计: {total_before//1024//1024}MB -> {total_after//1024//1024}MB  (原图已备份到 {BACKUP})")
