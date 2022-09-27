BEGIN;
INSERT INTO categories (Name)
VALUES ('T-Shirts'),
  ('Jeans'),
  ('Shoes');
INSERT INTO products (Name, Description, Image, Price, CategoryID)
VALUES (
    'Traditional Fit Short-Sleeve',
    'We love that our polo is made of 100% organic cotton - without the premium price of other organic polos on the market. We make it using supersoft fabric with a bit of texture for great character.',
    'https://cdni.llbean.net/is/image/wim/300454_243_41?hei=438&wid=380&qlt=40',
    30,
    4
  ),
  (
    'Mens Premium Double L® Polo Banded',
    'We love that our polo is made of 100% organic cotton - without the premium price of other organic polos on the market. We make it using supersoft fabric with a bit of texture for great character.',
    'https://cdni.llbean.net/is/image/wim/224547_1176_41?hei=438&wid=380&qlt=40',
    30,
    4
  ),
  (
    'Mens Lakewashed® Organic Cotton Polo',
    'We love that our polo is made of 100% organic cotton - without the premium price of other organic polos on the market. We make it using supersoft fabric with a bit of texture for great character.',
    'https://cdni.llbean.net/is/image/wim/513650_32573_41?hei=438&wid=380&qlt=40',
    30,
    4
  ),
  (
    'Mens Double L® Jeans',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf.',
    'https://cdni.llbean.net/is/image/wim/250265_0_44?hei=1370&wid=1190',
    30,
    5
  ),
  (
    'Flannel-LinedClassic Fit',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf. First',
    'https://cdni.llbean.net/is/image/wim/100220_0_44?hei=1370&wid=1190',
    30,
    5
  ),
  (
    'Mens Double L® Jeans, Natural Fit',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf. First',
    'https://cdni.llbean.net/is/image/wim/104731_0_44?hei=1370&wid=1190',
    30,
    5
  ),
  (
    'Womens L.L.Bean Boots',
    'Discover the broken-in comfort of our BeanBuilt collection. These rugged styles don’t mind a little mud, rain or dirt—instead, they get even better with age. Whether you’re hauling brush or grabbing breakfast, they’re made for real life in every way.',
    'https://cdni.llbean.net/is/image/wim/514176_33404_41?hei=438&wid=380&qlt=40',
    30,
    6
  ),
  (
    'Mens Bean Boots, Gumshoes',
    'Discover the broken-in comfort of our BeanBuilt collection. These rugged styles don’t mind a little mud, rain or dirt—instead, they get even better with age. Whether you’re hauling brush or grabbing breakfast, they’re made for real life in every way.',
    'https://cdni.llbean.net/is/image/wim/515262_36370_41?hei=438&wid=380&qlt=40',
    30,
    6
  ),
  (
    'Womens L.L.Bean Boots',
    'Made from heavyweight cotton that exceeds industry standards for toughness, the Double L Jeans are the most durable pair of denim we have on our shelf. First',
    'https://cdni.llbean.net/is/image/wim/175066_50509_41?hei=438&wid=380&qlt=40',
    30,
    6
  );
INSERT INTO users (Name, Email, HshedPassword)
VALUES ('test1', 'test1@gmail.com', '123456789');
Commit;