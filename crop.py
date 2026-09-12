from PIL import Image
import os

img = Image.open('public/flow.png')
w, h = img.size

half_w, half_h = w//2, h//2

img1 = img.crop((0, 0, half_w, half_h))
img2 = img.crop((half_w, 0, w, half_h))
img3 = img.crop((0, half_h, half_w, h))
img4 = img.crop((half_w, half_h, w, h))

img1.save('public/flow-1.png')
img2.save('public/flow-2.png')
img3.save('public/flow-3.png')
img4.save('public/flow-4.png')
print("Cropped successfully!")
