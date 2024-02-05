CREATE TABLE sales_order (
 OrderNo varchar(6) primary key,
  ClientNo varchar(6),
 foreign key(ClientNo) REFERENCES client_master(ClientNo),
 varchar(6),
 foreign key(CLIENTNO) REFERENCES client_master(CLIENTNO),
 OrderDate Date Not Null,
 DelyAddr varchar(25),
 SalesmanNo varchar(6),
 foreign key(SalesmanNo) REFERENCES SALESMAN_MASTER(SalesmanNo),
 DelyType char(1),
 BillN char(1),
 DelyDate Date,
 OrderStatus varchar(10)
);

INSERT INTO sales_orders_(OrderNo, CLIENTNO, OrderDate, SalesmanNo, DelyType, BillN, DelyDate, OrderStatus) VALUES
('O19001','C00001','2004-06-12','S00001','F','N','2002-07-20','In Process'),
('O19002','C00002','2004-06-25','S00002','P','N','2002-06-27','Cancelled'),
('O46865','C00003','2004-02-18','S00003','F','Y','2002-02-20','Fulfilled'),
('O19003','C00001','2004-04-03','S00001','F','Y','2002-04-07','Fulfilled'),
('O46866','C00004','2004-05-20','S00002','P','N','2002-05-22','Cancelled'),
('O19008','C00005','2004-05-24','S00004','F','N','2002-07-26','InProcess');