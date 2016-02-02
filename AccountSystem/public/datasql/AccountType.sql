
USE nodesample;

DROP TABLE IF EXISTS AccountType;
create TABLE AccountType(
  Id int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  TypeValue int(11) NOT NULL COMMENT '类型',
  TypeName varchar(64) NOT NULL COMMENT '类型名称',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='财务类型表';


select * from AccountType

