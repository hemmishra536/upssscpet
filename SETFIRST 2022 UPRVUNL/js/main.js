// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['EA (1).jpg','EA (2).jpg','EA (3).jpg','EA (4).jpg','EA (5).jpg','EA (6).jpg','EA (7).jpg','EA (8).jpg','EA (9).jpg','EA (10).jpg','EA (11).jpg','EA (12).jpg','EA (13).jpg','EA (14).jpg','EA (15).jpg','EA (16).jpg','EA (17).jpg','EA (18).jpg','EA (19).jpg','EA (20).jpg','EA (21).jpg','EA (22).jpg','EA (23).jpg','EA (24).jpg','EA (25).jpg','EA (26).jpg','EA (27).jpg','EA (28).jpg','EA (29).jpg','EA (30).jpg','EA (31).jpg','EA (32).jpg','EA (33).jpg','EA (34).jpg','EA (35).jpg','EA (36).jpg','EA (37).jpg','EA (38).jpg','EA (39).jpg','EA (40).jpg','EA (41).jpg','EA (42).jpg','EA (43).jpg','EA (44).jpg','EA (45).jpg','EA (46).jpg','EA (47).jpg','EA (48).jpg','EA (49).jpg','EA (50).jpg','EA (51).jpg','EA (52).jpg','EA (53).jpg','EA (54).jpg','EA (55).jpg','EA (56).jpg','EA (57).jpg','EA (58).jpg','EA (59).jpg','EA (60).jpg','EA (61).jpg','EA (62).jpg','EA (63).jpg','EA (64).jpg','EA (65).jpg','EA (66).jpg','EA (67).jpg','EA (68).jpg','EA (69).jpg','EA (70).jpg','EA (71).jpg','EA (72).jpg','EA (73).jpg','EA (74).jpg','EA (75).jpg','EA (76).jpg','EA (77).jpg','EA (78).jpg','EA (79).jpg','EA (80).jpg','EA (81).jpg','EA (82).jpg','EA (83).jpg','EA (84).jpg','EA (85).jpg','EA (86).jpg','EA (87).jpg','EA (88).jpg','EA (89).jpg','EA (90).jpg','EA (91).jpg','EA (92).jpg','EA (93).jpg','EA (94).jpg','EA (95).jpg','EA (96).jpg','EA (97).jpg','EA (98).jpg','EA (99).jpg','EA (100).jpg','EA (101).jpg','EA (102).jpg','EA (103).jpg','EA (104).jpg','EA (105).jpg','EA (106).jpg','EA (107).jpg','EA (108).jpg','EA (109).jpg','EA (110).jpg','EA (111).jpg','EA (112).jpg','EA (113).jpg','EA (114).jpg','EA (115).jpg','EA (116).jpg','EA (117).jpg','EA (118).jpg','EA (119).jpg','EA (120).jpg','EA (121).jpg','EA (122).jpg','EA (123).jpg','EA (124).jpg','EA (125).jpg','EA (126).jpg','EA (127).jpg','EA (128).jpg','EA (129).jpg','EA (130).jpg','EA (131).jpg','EA (132).jpg','EA (133).jpg','EA (134).jpg','EA (135).jpg','EA (136).jpg','EA (137).jpg','EA (138).jpg','EA (139).jpg','EA (140).jpg','EA (141).jpg','EA (142).jpg','EA (143).jpg','EA (144).jpg','EA (145).jpg','EA (146).jpg','EA (147).jpg','EA (148).jpg','EA (149).jpg','EA (150).jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function myImages1(){
i = -1;
	i++;
return setImg();
 }
function myImages2(){
i = 0;
	i++;
return setImg();
 }
function myImages3(){
i = 1;
	i++;
return setImg();
 }
function myImages4(){
i = 2;
	i++;
return setImg();
 }
function myImages5(){
i = 3;
	i++;
return setImg();
 }
function myImages6(){
i = 4;
	i++;
return setImg();
 }

function myImages7(){
i = 5;
	i++;
return setImg();
 }
function myImages8(){
i = 6;
	i++;
return setImg();
 }
function myImages9(){
i = 7;
	i++;
return setImg();
 }
function myImages10(){
i = 8;
	i++;
return setImg();
 }
function myImages11(){
i = 9;
	i++;
return setImg();
 }
function myImages12(){
i = 10;
	i++;
return setImg();
 }
function myImages13(){
i = 11;
	i++;
return setImg();
 }
function myImages14(){
i = 12;
	i++;
return setImg();
 }
function myImages15(){
i = 13;
	i++;
return setImg();
 }
function myImages16(){
i = 14;
	i++;
return setImg();
 }
function myImages17(){
i = 15;
	i++;
return setImg();
 }
function myImages18(){
i = 16;
	i++;
return setImg();
 }
function myImages19(){
i = 17;
	i++;
return setImg();
 }
function myImages20(){
i = 18;
	i++;
return setImg();
 }
function myImages21(){
i = 19;
	i++;
return setImg();
 }
function myImages22(){
i = 20;
	i++;
return setImg();
 }
function myImages23(){
i = 21;
	i++;
return setImg();
 }
function myImages24(){
i = 22;
	i++;
return setImg();
 }
function myImages25(){
i = 23;
	i++;
return setImg();
 }
function myImages26(){
i = 24;
	i++;
return setImg();
 }
function myImages27(){
i = 25;
	i++;
return setImg();
 }
function myImages28(){
i = 26;
	i++;
return setImg();
 }
function myImages29(){
i = 27;
	i++;
return setImg();
 }
function myImages30(){
i = 28;
	i++;
return setImg();
 }
function myImages31(){
i = 29;
	i++;
return setImg();
 }
function myImages32(){
i = 30;
	i++;
return setImg();
 }
function myImages33(){
i = 31;
	i++;
return setImg();
 }
function myImages34(){
i = 32;
	i++;
return setImg();
 }
function myImages35(){
i = 33;
	i++;
return setImg();
 }
function myImages36(){
i = 34;
	i++;
return setImg();
 }
function myImages37(){
i = 35;
	i++;
return setImg();
 }
function myImages38(){
i = 36;
	i++;
return setImg();
 }
function myImages39(){
i = 37;
	i++;
return setImg();
 }
function myImages40(){
i = 38;
	i++;
return setImg();
 }
function myImages41(){
i = 39;
	i++;
return setImg();
 }
function myImages42(){
i = 40;
	i++;
return setImg();
 }
function myImages43(){
i = 41;
	i++;
return setImg();
 }
function myImages44(){
i = 42;
	i++;
return setImg();
 }
function myImages45(){
i = 43;
	i++;
return setImg();
 }
function myImages46(){
i = 44;
	i++;
return setImg();
 }
function myImages47(){
i = 45;
	i++;
return setImg();
 }
function myImages48(){
i = 46;
	i++;
return setImg();
 }
function myImages49(){
i = 47;
	i++;
return setImg();
 }
function myImages50(){
i = 48;
	i++;
return setImg();
 }
function myImages51(){
i = 49;
	i++;
return setImg();
 }
function myImages52(){
i = 50;
	i++;
return setImg();
 }
function myImages53(){
i = 51;
	i++;
return setImg();
 }
function myImages54(){
i = 52;
	i++;
return setImg();
 }
function myImages55(){
i = 53;
	i++;
return setImg();
 }
function myImages56(){
i = 54;
	i++;
return setImg();
 }
function myImages57(){
i = 55;
	i++;
return setImg();
 }
function myImages58(){
i = 56;
	i++;
return setImg();
 }
function myImages59(){
i = 57;
	i++;
return setImg();
 }
function myImages60(){
i = 58;
	i++;
return setImg();
 }
function myImages61(){
i = 59;
	i++;
return setImg();
 }
function myImages62(){
i = 60;
	i++;
return setImg();
 }
function myImages63(){
i = 61;
	i++;
return setImg();
 }
function myImages64(){
i = 62;
	i++;
return setImg();
 }
function myImages65(){
i = 63;
	i++;
return setImg();
 }
function myImages66(){
i = 64;
	i++;
return setImg();
 }
function myImages67(){
i = 65;
	i++;
return setImg();
 }
function myImages68(){
i = 66;
	i++;
return setImg();
 }
function myImages69(){
i = 67;
	i++;
return setImg();
 }
function myImages70(){
i = 68;
	i++;
return setImg();
 }
function myImages71(){
i = 69;
	i++;
return setImg();
 }
function myImages72(){
i = 70;
	i++;
return setImg();
 }
function myImages73(){
i = 71;
	i++;
return setImg();
 }
function myImages74(){
i = 72;
	i++;
return setImg();
 }
function myImages75(){
i = 73;
	i++;
return setImg();
 }
function myImages76(){
i = 74;
	i++;
return setImg();
 }
function myImages77(){
i = 75;
	i++;
return setImg();
 }
function myImages78(){
i = 76;
	i++;
return setImg();
 }
function myImages79(){
i = 77;
	i++;
return setImg();
 }
function myImages80(){
i = 78;
	i++;
return setImg();
 }
function myImages81(){
i = 79;
	i++;
return setImg();
 }
function myImages82(){
i = 80;
	i++;
return setImg();
 }
function myImages83(){
i = 81;
	i++;
return setImg();
 }
function myImages84(){
i = 82;
	i++;
return setImg();
 }
function myImages85(){
i = 83;
	i++;
return setImg();
 }
function myImages86(){
i = 84;
	i++;
return setImg();
 }
function myImages87(){
i = 85;
	i++;
return setImg();
 }
function myImages88(){
i = 86;
	i++;
return setImg();
 }
function myImages89(){
i = 87;
	i++;
return setImg();
 }
function myImages90(){
i = 88;
	i++;
return setImg();
 }
function myImages91(){
i = 89;
	i++;
return setImg();
 }
function myImages92(){
i = 90;
	i++;
return setImg();
 }
function myImages93(){
i = 91;
	i++;
return setImg();
 }
function myImages94(){
i = 92;
	i++;
return setImg();
 }
function myImages95(){
i = 93;
	i++;
return setImg();
 }
function myImages96(){
i = 94;
	i++;
return setImg();
 }
function myImages97(){
i = 95;
	i++;
return setImg();
 }
function myImages98(){
i = 96;
	i++;
return setImg();
 }
function myImages99(){
i = 97;
	i++;
return setImg();
 }
function myImages100(){
i = 98;
	i++;
return setImg();
 }
function myImages101(){
i = 99;
	i++;
return setImg();
 }
function myImages102(){
i = 100;
	i++;
return setImg();
 }
function myImages103(){
i = 101;
	i++;
return setImg();
 }
function myImages104(){
i = 102;
	i++;
return setImg();
 }
function myImages105(){
i = 103;
	i++;
return setImg();
 }
function myImages106(){
i = 104;
	i++;
return setImg();
 }
function myImages107(){
i = 105;
	i++;
return setImg();
 }
function myImages108(){
i = 106;
	i++;
return setImg();
 }
function myImages109(){
i = 107;
	i++;
return setImg();
 }
function myImages110(){
i = 108;
	i++;
return setImg();
 }
function myImages111(){
i = 109;
	i++;
return setImg();
 }
function myImages112(){
i = 110;
	i++;
return setImg();
 }
function myImages113(){
i = 111;
	i++;
return setImg();
 }
function myImages114(){
i = 112;
	i++;
return setImg();
 }
function myImages115(){
i = 113;
	i++;
return setImg();
 }
function myImages116(){
i = 114;
	i++;
return setImg();
 }
function myImages117(){
i = 115;
	i++;
return setImg();
 }
function myImages118(){
i = 116;
	i++;
return setImg();
 }
function myImages119(){
i = 117;
	i++;
return setImg();
 }
function myImages120(){
i = 118;
	i++;
return setImg();
 }
function myImages121(){
i = 119;
	i++;
return setImg();
 }
function myImages122(){
i = 120;
	i++;
return setImg();
 }
function myImages123(){
i = 121;
	i++;
return setImg();
 }
function myImages124(){
i = 122;
	i++;
return setImg();
 }
function myImages125(){
i = 123;
	i++;
return setImg();
 }
function myImages126(){
i = 124;
	i++;
return setImg();
 }
function myImages127(){
i = 125;
	i++;
return setImg();
 }
function myImages128(){
i = 126;
	i++;
return setImg();
 }
function myImages129(){
i = 127;
	i++;
return setImg();
 }
function myImages130(){
i = 128;
	i++;
return setImg();
 }
function myImages131(){
i = 129;
	i++;
return setImg();
 }
function myImages132(){
i = 130;
	i++;
return setImg();
 }
function myImages133(){
i = 131;
	i++;
return setImg();
 }
function myImages134(){
i = 132;
	i++;
return setImg();
 }
function myImages135(){
i = 133;
	i++;
return setImg();
 }
function myImages136(){
i = 134;
	i++;
return setImg();
 }
function myImages137(){
i = 135;
	i++;
return setImg();
 }
function myImages138(){
i = 136;
	i++;
return setImg();
 }
function myImages139(){
i = 137;
	i++;
return setImg();
 }
function myImages140(){
i = 138;
	i++;
return setImg();
 }
function myImages141(){
i = 139;
	i++;
return setImg();
 }
function myImages142(){
i = 140;
	i++;
return setImg();
 }
function myImages143(){
i = 141;
	i++;
return setImg();
 }
function myImages144(){
i = 142;
	i++;
return setImg();
 }
function myImages145(){
i = 143;
	i++;
return setImg();
 }
function myImages146(){
i = 144;
	i++;
return setImg();
 }
function myImages147(){
i = 145;
	i++;
return setImg();
 }
function myImages148(){
i = 146;
	i++;
return setImg();
 }
function myImages149(){
i = 147;
	i++;
return setImg();
 }
function myImages150(){
i = 148;
	i++;
return setImg();
 }
function myFunction1() {
  document.getElementById("myP").style.visibility = "hidden";
} 

function myFunction2() {
  document.getElementById("myP").style.visibility = "visible";
} 

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}
