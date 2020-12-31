/* ACCOUNT */
DROP TABLE ACCOUNT CASCADE CONSTRAINTS;
DROP SEQUENCE ACCOUNT_ID_SEQ;
/* ACCOUNT */

/* CHARACTER */
DROP TABLE AC_CHARACTER CASCADE CONSTRAINTS;
DROP SEQUENCE CHARACTER_ID_SEQ;

DROP TABLE CH_EQUIP CASCADE CONSTRAINTS;
DROP TABLE CH_INVENTORY_ITEM CASCADE CONSTRAINTS;
DROP TABLE CH_INVENTORY_EQUIP CASCADE CONSTRAINTS;
/* CHARACTER */

/* ITEM */
DROP TABLE ITEM_DB;
DROP SEQUENCE ITEM_ID_SEQ START_WITH;
DROP SEQUENCE ITEM_SET_SEQ;
/* ITEM */

CREATE TABLE ACCOUNT (
	ACCOUNT_ID VARCHAR2(20) NOT NULL,
	ACCOUNT_PW VARCHAR2(30) NOT NULL,
	NAME VARCHAR2(20),
	HIREDATE DATE DEFAULT SYSDATE,
	ID VARCHAR2(4) PRIMARY KEY
);

CREATE TABLE AC_CHARACTER (
  USER_ID VARCHAR2(20),
  CH_ID VARCHAR2(20) PRIMARY KEY,
  CH_NAME VARCHAR2(20) NOT NULL,
  CH_CLASS VARCHAR2(20) NOT NULL,
  CH_LEVEL NUMBER(3) NOT NULL,
  CH_CUR_EXP NUMBER(12),
  HP NUMBER(9) NOT NULL,
  MP NUMBER(9) NOT NULL,
  CRITICAL NUMBER(3) NOT NULL,
  PHDAMAGE NUMBER(9) NOT NULL,
  ABDAMAGE NUMBER(9) NOT NULL,
  PHDEF NUMBER(9) NOT NULL,
  ABDEF NUMBER(9) NOT NULL,
  HITRATE NUMBER(3),
  EVASIONRATE NUMBER(2),
  STATUS_STR NUMBER(5) NOT NULL,
  STATUS_INT NUMBER(5) NOT NULL,
  STATUS_DEX NUMBER(5) NOT NULL,
  STATUS_LUCK NUMBER(5) NOT NULL,
  STATUS_POINT NUMBER(5) NOT NULL,
  SKILL_POINT NUMBER(5) NOT NULL,
  ELEMENT_DEF_WATER NUMBER(9),
  ELEMENT_DEF_EARTH NUMBER(9),
  ELEMENT_DEF_WIND NUMBER(9),
  ELEMENT_DEF_FIRE NUMBER(9),
  ELEMENT_ATK_WATER NUMBER(9),
  ELEMENT_ATK_EARTH NUMBER(9),
  ELEMENT_ATK_WIND NUMBER(9),
  ELEMENT_ATK_FIRE NUMBER(9),
  CREATED_DATE DATE,
  LAST_LOGOUT_DATE DATE,
  PLAY_TIME VARCHAR2(20),
  USER_STATUS VARCHAR2(50),
  CONSTRAINT USER_ID FOREIGN KEY(USER_ID) 
  REFERENCES ACCOUNT(ID) ON DELETE CASCADE
);

CREATE TABLE CH_EQUIP (
  CH_ID VARCHAR2(20),
  ITEM_ID VARCHAR2(20),
  CURRENT_UPGRADE_COUNT NUMBER(2)
);

CREATE TABLE CH_INVENTORY_ITEM (
  CH_ID VARCHAR2(20),
  ITEM_ID VARCHAR2(20) NOT NULL,
  ITEM_COUNT NUMBER(2) NOT NULL,
  INVEN_INDEX NUMBER(2) NOT NULL
);

CREATE TABLE CH_INVENTORY_EQUIP (
  CH_ID VARCHAR2(20),
  ITEM_ID VARCHAR2(20),
  CURRENT_UPGRADE_COUNT NUMBER(2)
)

CREATE TABLE ITEM_EQUIP (
	ITEM_EQUIP_ID VARCHAR2(20),
  ITEM_SET_OPTION_SEQ VARCHAR2(20),
	ITEM_NAME VARCHAR2(50),
	ITEM_RANK VARCHAR2(20),
	EQUIP_TYPE VARCHAR2(20),
	EQUIP_PART VARCHAR2(20),
	ITEM_DESC VARCHAR2(800),
	BUY_PRICE NUMBER(20),
	SELL_PRICE NUMBER(20),
  AWAKE_POSIBLE_YN VARCHAR2(2),
  AWAKE_ITEM_ID VARCHAR2(20),
	MAX_UPGRADE NUMBER(2),
	EQUIP_OPTION VARCHAR2(800),
  UPGRADE_OPTION VARCHAR2(800),
  EQUIP_LIMIT_LEVEL NUMBER(5)
);

CREATE TABLE SET_OPTION (
  SET_OPTION_ID NUMBER(2),
  SET_NAME VARCHAR2(30),
  SET_PIECE NUMBER(2),
  SET_OPTION VARCHAR2(800)
);

CREATE TABLE ITEM_ITEM (

);

CREATE TABLE COMMON_CODE (
  COMMON_VALUE VARCHAR2(20),
  COMMON_NM VARCHAR2(20),
  COMMON_CATEGORY VARCHAR2(20),
  COMMON_CATEGORY_ITEM VARCHAR2(20)
);

/* CHARACTER */
CREATE SEQUENCE CHARACTER_ID_SEQ START WITH 1 INCREMENT BY 1;
/* CHARACTER */

/* ITEM */
CREATE SEQUENCE ITEM_ID_SEQ START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE ITEM_SET_OPTION_SEQ START WITH 1 INCREMENT BY 1;
/* ITEM */

/* ACCOUNT */
CREATE SEQUENCE ACCOUNT_ID_SEQ START WITH 1 INCREMENT BY 1;
/* ACCOUNT */

/* DEFAULT DATA */
INSERT INTO ACCOUNT VALUES ('admin','123456' , '관리자', SYSDATE , ACCOUNT_ID_SEQ.NEXTVAL);

INSERT INTO COMMON_CODE VALUES ('NORMAL','일반아이템','ITEM','TYPE');
INSERT INTO COMMON_CODE VALUES ('USED','소모형아이템','ITEM','TYPE');

INSERT INTO COMMON_CODE VALUES ('NORMAL','일반 장비','EQUIP','TYPE');
INSERT INTO COMMON_CODE VALUES ('AWAKE','각성 장비','EQUIP','TYPE');
INSERT INTO COMMON_CODE VALUES ('SET','세트 장비','EQUIP','TYPE');
INSERT INTO COMMON_CODE VALUES ('ACC','악세사리','EQUIP','TYPE');

INSERT INTO COMMON_CODE VALUES ('DROP','드랍아이템','ITEM','NORMAL');

INSERT INTO COMMON_CODE VALUES ('UPGRADE_STORN','강화석','ITEM','USED');
INSERT INTO COMMON_CODE VALUES ('PORTION_HEAL','회복형 아이템','ITEM','USED');
INSERT INTO COMMON_CODE VALUES ('PORTION_BUFF','버프형 아이템','ITEM','USED');
INSERT INTO COMMON_CODE VALUES ('SCROLL','주문서','ITEM','USED');

INSERT INTO COMMON_CODE VALUES ('HEAD','머리','EQUIP','PART');
INSERT INTO COMMON_CODE VALUES ('CHEST','가슴','EQUIP','PART');
INSERT INTO COMMON_CODE VALUES ('HAND','손','EQUIP','PART');
INSERT INTO COMMON_CODE VALUES ('PANTS','다리','EQUIP','PART');
INSERT INTO COMMON_CODE VALUES ('FOOT','발','EQUIP','PART');
INSERT INTO COMMON_CODE VALUES ('ACC_RING','반지','EQUIP','PART');
INSERT INTO COMMON_CODE VALUES ('ACC_NECK','목걸이','EQUIP','PART');
INSERT INTO COMMON_CODE VALUES ('WEAPON','무기','EQUIP','PART');

INSERT INTO COMMON_CODE VALUES ('NORMAL','일반','ITEM','RANK');
INSERT INTO COMMON_CODE VALUES ('MAGIC','매직','ITEM','RANK');
INSERT INTO COMMON_CODE VALUES ('RARE','레어','ITEM','RANK');
INSERT INTO COMMON_CODE VALUES ('UNIQUE','유니크','ITEM','RANK');
INSERT INTO COMMON_CODE VALUES ('REGEND','전설','ITEM','RANK');
INSERT INTO COMMON_CODE VALUES ('RELICS','유물','ITEM','RANK');

INSERT INTO COMMON_CODE VALUES ('STR','힘','OPTION','COMMON');
INSERT INTO COMMON_CODE VALUES ('INT','지능','OPTION','COMMON');
INSERT INTO COMMON_CODE VALUES ('DEX','민첩','OPTION','COMMON');
INSERT INTO COMMON_CODE VALUES ('LUCK','행운','OPTION','COMMON');
INSERT INTO COMMON_CODE VALUES ('EL_DEF_WATER','물속성 저항','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EL_DEF_EARTH','흙속성 저항','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EL_DEF_WIND','바람속성 저항','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EL_DEF_FIRE','불속성 저항','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EL_ATK_WATER','물속성 피해','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EL_ATK_EARTH','흙속성 피해','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EL_ATK_WIND','바람속성 피해','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EL_ATK_FIRE','화속성 피해','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('HP','체력','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('MP','마나','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('HITRATE','적중률','OPTION','COMMON')
INSERT INTO COMMON_CODE VALUES ('EVASIONRATE','회피확률','OPTION','COMMON')

INSERT INTO COMMON_CODE VALUES ('ATK_PH','물리피해','OPTION','WEAPON');
INSERT INTO COMMON_CODE VALUES ('ATK_AG','마법피해','OPTION','WEAPON');
INSERT INTO COMMON_CODE VALUES ('CRETICAL','치명타확률','OPTION','WEAPON');
INSERT INTO COMMON_CODE VALUES ('DEF_IGNORE','방어력무시수치','OPTION','WEAPON');

INSERT INTO COMMON_CODE VALUES ('DEF_PH','물리방어력','OPTION','ARMOR');
INSERT INTO COMMON_CODE VALUES ('DEF_AG','마법방어력','OPTION','ARMOR');
INSERT INTO COMMON_CODE VALUES ('DEF_ABSOLUTE','고정피해감소','OPTION','ARMOR');
INSERT INTO COMMON_CODE VALUES ('DEF_CRETICAL','치명타피해감소','OPTION','ARMOR');

/* DEFAULT DATA */

SELECT * FROM COMMON_CODE;
SELECT * FROM COMMON_CODE 
	WHERE 1=1 
		AND
		COMMON_CATEGORY = 'ITEM' AND COMMON_CATEGORY_ITEM = 'TYPE';


COMMIT;
