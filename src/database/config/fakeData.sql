BEGIN;
INSERT INTO categories (Name)
VALUES ('Shirts'),
  ('Jeans'),
  ('Shoes');
COMMIT;
BEGIN;
INSERT INTO products (Name, Description, Image, Price, CategoryID)
VALUES
 (
    'Mens Patchwork Corduroy Long Sleeve Shirt Autumn',
    'Mens Patchwork Corduroy Long Sleeve Shirt Autumn Fashion Casual Daily Japanese High Quality Contrast Color Harajuku Shirt 2022',
    'https://ae01.alicdn.com/kf/Hbcb6946719884fb38c4a960643869dbdD/Men-s-Patchwork-Corduroy-Long-Sleeve-Shirt-Autumn-Fashion-Casual-Daily-Japanese-High-Quality-Contrast-Color.jpg_Q90.jpg_.webp',
    8,
    1
  ),
 (
    'Summer Cool Men Short-sleeved Shirt',
    'Summer Cool Men Short-sleeved Shirt Anti-wrinkle Solid Color Fashion office Casual Loose Button Pocket Shirt Male Clothing Top',
    'https://ae01.alicdn.com/kf/Sc04f2d30182146e4b2d1c0281bc6937cy/Summer-Cool-Men-Short-sleeved-Shirt-Anti-wrinkle-Solid-Color-Fashion-office-Casual-Loose-Button-Pocket.jpg_Q90.jpg_.webp',
    30,
    1
  ),
 (
    'Mens Scottish Jacobite Ghillie Kilt Shirt',
    'Mens Scottish Jacobite Ghillie Kilt Shirts Medieval Renaissance Pirate Costume Long Sleeve Lace Up Henley Shirt Men Camisas XXL',
    'https://ae01.alicdn.com/kf/Sd2c2d9a62e934c48bbab14d70aa47092O/Mens-Scottish-Jacobite-Ghillie-Kilt-Shirts-Medieval-Renaissance-Pirate-Costume-Long-Sleeve-Lace-Up-Henley-Shirt.jpg_Q90.jpg_.webp',
    30,
    1
  ),
 (
    'Hawaiian beach shirts short-sleeved casual shirt',
    'Hawaiian beach shirts Mens short-sleeved casual shirts Seaside vacation quick-drying clothes Loose floral tops',
    'https://cdni.llbean.net/is/image/wim/300454_243_41?hei=438&wid=380&qlt=40',
    30,
    1
  ),
 (
    'Traditional Fit Short-Sleeve',
    'We love that our polo is made of 100% organic cotton - without the premium price of other organic polos on the market. We make it using supersoft fabric with a bit of texture for great character.',
    'https://ae01.alicdn.com/kf/H818be6b5758a40c383f98f9a4e30b95bW/Hawaiian-beach-shirts-Men-s-short-sleeved-casual-shirts-Seaside-vacation-quick-drying-clothes-Loose-floral.jpg_Q90.jpg_.webp',
    30,
    1
  ),
 (
    'Harajuku Plaid Shirt Men Cotton Casual Shirt',
    'Harajuku Plaid Shirt Men Cotton Casual Shirts Male Long Sleeve Jacket Unisex Blouses Tops Loose Checkboard Coat Spring Autumn',
    'https://ae01.alicdn.com/kf/S54fd3dbf1f9d40d384aae452498f570fb/Harajuku-Plaid-Shirt-Men-Cotton-Casual-Shirts-Male-Long-Sleeve-Jacket-Unisex-Blouses-Tops-Loose-Checkboard.jpg_Q90.jpg_.webp',
    10,
    1
  ),
  (
    'Mens Premium Double L® Polo Banded',
    'We love that our polo is made of 100% organic cotton - without the premium price of other organic polos on the market. We make it using supersoft fabric with a bit of texture for great character.',
    'https://cdni.llbean.net/is/image/wim/224547_1176_41?hei=438&wid=380&qlt=40',
    30,
    1
  ),
  (
    'Mens Lakewashed® Organic Cotton Polo',
    'We love that our polo is made of 100% organic cotton - without the premium price of other organic polos on the market. We make it using supersoft fabric with a bit of texture for great character.',
    'https://cdni.llbean.net/is/image/wim/513650_32573_41?hei=438&wid=380&qlt=40',
    30,
    1
  ),
  (
    'Mens Double L® Jeans',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf.',
    'https://cdni.llbean.net/is/image/wim/250265_0_44?hei=1370&wid=1190',
    90,
    2
  ),
  (
    'Flannel-LinedClassic Fit',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf. First',
    'https://cdni.llbean.net/is/image/wim/100220_0_44?hei=1370&wid=1190',
    30,
    2
  ),
  (
    'Mens Double L® Jeans, Natural Fit',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf. First',
    'https://cdni.llbean.net/is/image/wim/104731_0_44?hei=1370&wid=1190',
    30,
    2
  ),
  (
    'Womens L.L.Bean Boots',
    'Discover the broken-in comfort of our BeanBuilt collection. These rugged styles don’t mind a little mud, rain or dirt—instead, they get even better with age. Whether you’re hauling brush or grabbing breakfast, they’re made for real life in every way.',
    'https://cdni.llbean.net/is/image/wim/514176_33404_41?hei=438&wid=380&qlt=40',
    70,
    3
  ),
  (
    'Mens Bean Boots, Gumshoes',
    'Discover the broken-in comfort of our BeanBuilt collection. These rugged styles don’t mind a little mud, rain or dirt—instead, they get even better with age. Whether you’re hauling brush or grabbing breakfast, they’re made for real life in every way.',
    'https://cdni.llbean.net/is/image/wim/515262_36370_41?hei=438&wid=380&qlt=40',
    30,
    3
  ),
  (
    'Womens L.L.Bean Boots',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf. First',
    'https://cdni.llbean.net/is/image/wim/175066_50509_41?hei=438&wid=380&qlt=40',
    30,
    3
  );
  COMMIT;
  BEGIN;
INSERT INTO users (Name, Email, HshedPassword)
VALUES ('test1', 'test1@gmail.com', '123456789');



Commit;