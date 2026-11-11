from pathlib import Path
from PIL import Image, ImageDraw
import pypdfium2 as pdfium

src=Path(r'C:\PROYECTOS\ETL\CNX_BLOQUE1\outputs\20261109\Plan_de_Migración_SGM_a_Connexa.pdf')
out=Path(r'C:\PROYECTOS\ETL\CNX_BLOQUE1\.build\kit_referentes_20261111')
doc=pdfium.PdfDocument(str(src))
thumbs=[]
for i,page in enumerate(doc):
    im=page.render(scale=0.45).to_pil().convert('RGB')
    im.thumbnail((480,280))
    tile=Image.new('RGB',(500,315),'white')
    tile.paste(im,((500-im.width)//2,20))
    ImageDraw.Draw(tile).text((12,290),f'{i+1}',fill='#123')
    thumbs.append(tile)
sheet=Image.new('RGB',(2000,315*((len(thumbs)+3)//4)),'white')
for i,im in enumerate(thumbs):sheet.paste(im,((i%4)*500,(i//4)*315))
sheet.save(out/'deck_contact.png')
