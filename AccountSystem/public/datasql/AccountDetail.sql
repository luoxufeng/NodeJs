
USE nodesample;

DROP TABLE IF EXISTS AccountDetail;
create TABLE AccountDetail(
  Id int(11) primary key NOT NULL AUTO_INCREMENT COMMENT '主键',
  TypeId int(11) NOT NULL COMMENT '类型',
  TypeName varchar(100) NOT NULL COMMENT '类型名称',
  AccountMoney float(10,2) NOT NULL COMMENT '消费金额',
  AccountSource varchar(100) NOT NULL COMMENT '来源',
  CostTime datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '消费日期',
  AddTime datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加日期' ,
  UpdateTime datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改日期' ,
  AccountDesc varchar(500) NULL COMMENT '描述'
)
