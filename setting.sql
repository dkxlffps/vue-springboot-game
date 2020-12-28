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

CREATE TABLE ITEM_DB (
  ITEM_ID VARCHAR2(10) PRIMARY KEY,
  ITEM_CATEGORY VARCHAR2(20),
  ITEM_TYPE VARCHAR2(20),
  ITEM_NAME VARCHAR2(20),
  ITEM_CLASS_RANK VARCHAR2(20) NOT NULL,
  ITEM_DESC VARCHAR2(800) NOT NULL,
  BUY_PRICE NUMBER(20),
  SELL_PRICE NUMBER(20),
  EQUIP_LIMIT_LEVEL NUMBER(20),
  AWAKE_POSIBLE_YN VARCHAR2(2),
  AWAKE_ITEM_ID VARCHAR2(10),
  ITEM_OPTION VARCHAR2(500),
  BONUS_OPTION VARCHAR2(500),
  SET_OPTION VARCHAR2(500),
  SET_ITEM_SEQ VARCHAR2(10),
  MAX_UPGRADE_COUNT NUMBER(2),
  MAX_NESTING_NUM NUMBER(2)
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
CREATE SEQUENCE ITEM_SET_SEQ START WITH 1 INCREMENT BY 1;
/* ITEM */

/* ACCOUNT */
CREATE SEQUENCE ACCOUNT_ID_SEQ START WITH 1 INCREMENT BY 1;
/* ACCOUNT */


INSERT INTO ACCOUNT VALUES ('admin','123456' , '관리자', SYSDATE , ACCOUNT_ID_SEQ.NEXTVAL);

INSERT INTO COMMON_CODE VALUES ('drop','드랍아이템','ITEM','DROP');

INSERT INTO COMMON_CODE VALUES ('quest','퀘스트아이템','ITEM','QUEST');

INSERT INTO COMMON_CODE VALUES ('upgrade_storn','강화석','ITEM','USED');
INSERT INTO COMMON_CODE VALUES ('portion_heal','회복형 아이템','ITEM','USED');
INSERT INTO COMMON_CODE VALUES ('portion_buf','버프형 아이템','ITEM','USED');
INSERT INTO COMMON_CODE VALUES ('scroll','주문서','ITEM','USED');

INSERT INTO COMMON_CODE VALUES ('equip','일반 장비','EQUIP','NORMAL');
INSERT INTO COMMON_CODE VALUES ('equip_awake','각성 장비','EQUIP','AWAKE');
INSERT INTO COMMON_CODE VALUES ('equip_set','세트 장비','EQUIP','SET');


COMMIT;
