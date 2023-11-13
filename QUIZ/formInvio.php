<?php
/*
formMail completo, è possibile aggiungere qualunque campo
è sufficiente inserire le due pagine in un punto qualunque
del proprio dominio.
MODIFICATO 29 OTTOBRE 2022 DA https://www.freelancer.com/u/aftabyounas
REV 2013
*/

//INIZIO PARAMETRI DA SETTARE OBBLIGATORIAMENTE
/****************************************************************************************/

//email di destinazione, mettere qui la propria email

$contenitore = $_POST['recipient'];

// Il parametro $provenienza indica le possibili provenienze dei dati: indicare
// il proprio dominio nella forma mostrata dall'esempio. l IP è facoltativo.

$provenienza = array ('/sinapsi.org/','/www.sinapsi.org/','lnx.sinapsi.org', 'sinapsi.org', 'www.sinapsi.org');


// Il parametro $url indica la pagina alla quale si viene
// rimandati una volta compilato correttamente il modulo
// io ho messo la homepage, ma potrebbe essere qualunque altra pagina

// $url = "/";


//FINE PARAMETRI DA SETTARE OBBLIGATORIAMENTE
/****************************************************************************************/
// Il parametro $delay indica i secondi di ritardo impiegati 
// a riportare l'utente all'home page una volta 
// compilato correttamente il modulo

// $delay = "5";

// Il parametro $esclusioni vi permette di NON consentire 
// messaggi da un indirizzo mail specificato
// sia appartenente ad un dominio, ovvero 
// 'tutte le mail che appartengono ad un dominio'
// od anche a singoli account

$esclusioni = array ('*@quellochetipare.com', 'nomechetipare@dominio.com', 'altro@dominio.com');
$bgcolor = $_POST['bgcolor'];
$titolo = $_POST['subject'];
$content_html="";

// ini_set('display_error', 1);
// error_reporting(E_ALL);

ini_set('log_errors','On');
ini_set('display_errors','Off');
ini_set('error_reporting', E_ALL );

//$redirect = "http://www.masterbass.com";

$versione_form = "stabile";

function print_error($reason,$type = 0) {
   global $versione_form;
   build_body($title, $bgcolor, $text_color, $link_color, $vlink_color, $alink_color, $style_sheet);
      if ($type == "missing") {
      ?>
      <body bgcolor=\"$bgcolor\">
      <p align='center'><font face='Arial' color='#990000' size='2'>Il modulo non è
stato inviato per le seguenti ragioni</font></p><br>
<p align='center'><font face='Arial' size='2' color='#990000'>
     <?php
     echo $reason."\n";
     ?>
     </font>
     <p align='center'><font face='Arial' size='2' color='#990000'>Premere indietro
nel browser e riprovare.</font></p><?php
   } else { // every other error
      ?>
      Il modulo non è stato inviato per le seguenti ragioni:<p align='center'>
      <?php
   }
   echo "<br><br>\n";
  
   exit;
}

function check_banlist($esclusioni, $email) {
   if (count($esclusioni)) {
      $allow = true;
      foreach($esclusioni as $banned) {
         $temp = explode("@", $banned);
         if ($temp[0] == "*") {
            $temp2 = explode("@", $email);
            if (trim(strtolower($temp2[1])) == trim(strtolower($temp[1])))
               $allow = false;
         } else {
            if (trim(strtolower($email)) == trim(strtolower($banned)))
               $allow = false;
         }
      }
   }
   if (!$allow) {
      print_error("Stai usando un <b>indirizzo email escluso.</b>");
   }
}


function check_referer($provenienza) { }
if ($provenienza){
   check_referer($provenienza);
}

if ($esclusioni){
   // var_dump($esclusioni);
   check_banlist($esclusioni, $email);
}
function parse_form($array) {
   // build reserved keyword array
   $reserved_keys[] = "required";
   $reserved_keys[] = "redirect";
   $reserved_keys[] = "email";
   $reserved_keys[] = "require";
   $reserved_keys[] = "contenitore";
   $reserved_keys[] = "titolo";
   $reserved_keys[] = "bgcolor";
   $reserved_keys[] = "text_color";
   $reserved_keys[] = "link_color";
   $reserved_keys[] = "vlink_color";
   $reserved_keys[] = "alink_color";
   $reserved_keys[] = "title";
   $reserved_keys[] = "recipient";
   $reserved_keys[] = "sort";
   $reserved_keys[] = "subject";
   $reserved_keys[] = "missing_fields_redirect";
   $reserved_keys[] = "invia_Dati";
   if (count($array)) {
      // while (list($key, $val) = each($array)) {
      foreach ($array as $key => $val) {
         $reserved_violation = 0;
         for ($ri=0; $ri<count($reserved_keys); $ri++) {
            if ($key == $reserved_keys[$ri]) {
               $reserved_violation = 1;
            }
         }
      
         if ($reserved_violation != 1) {
            if (is_array($val)) {
               for ($z=0;$z<count($val);$z++) {
                  $content .= "$key: $val[$z]\n";
              $content_html .= "<b>$key:</b> $val[$z]<br>";
               }
            } else {
               $content .= "$key: $val\n";
            $content_html .= "<b>$key:</b> $val<br>";
            }
         }
      }
   }
   return $content;
}

function parse_form_html($array) {
   // build reserved keyword array
   $reserved_keys[] = "required";
   $reserved_keys[] = "redirect";
   $reserved_keys[] = "email";
   $reserved_keys[] = "require";
   $reserved_keys[] = "contenitore";
   $reserved_keys[] = "titolo";
   $reserved_keys[] = "bgcolor";
   $reserved_keys[] = "text_color";
   $reserved_keys[] = "link_color";
   $reserved_keys[] = "vlink_color";
   $reserved_keys[] = "alink_color";
   $reserved_keys[] = "title";
   $reserved_keys[] = "recipient";
   $reserved_keys[] = "sort";
   $reserved_keys[] = "subject";
   $reserved_keys[] = "missing_fields_redirect";
   $reserved_keys[] = "invia_Dati";
   if (count($array)) {
      foreach ($array as $key => $val) {
         $reserved_violation = 0;
         for ($ri=0; $ri<count($reserved_keys); $ri++) {
            if ($key == $reserved_keys[$ri]) {
               $reserved_violation = 1;
            }
         }
      
         if ($reserved_violation != 1) {
            if (is_array($val)) {
               for ($z=0;$z<count($val);$z++) {
              $content_html .= "<b>$key:</b> $val[$z]<br>";
               }
            } else {
            $content_html .= "<b>$key:</b> $val<br>";
            }
         }
      }
   }
   return $content_html;
}


function mail_it($content, $titolo, $email, $contenitore) {
        mail($contenitore, $titolo, $content, "From: $contenitore\r\nReply-To: $contenitore\r\nX-Mailer: DT_formmail");
}

function build_body($title, $bgcolor, $text_color, $link_color, $vlink_color, $alink_color, $style_sheet) {
   if ($style_sheet)
      echo "<LINK rel=STYLESHEET href=\"$style_sheet\" Type=\"text/css\">\n";
   if ($title)
      echo "<title>$title</title>\n";
   if (!$bgcolor)
      $bgcolor = "#94B6C6";
   if (!$text_color)
      $text_color = "#80000";
   if (!$link_color)
      $link_color = "#0000FF";
   if (!$vlink_color)
      $vlink_color = "#FF0000";
   if (!$alink_color)
      $alink_color = "#000088";
   if ($background)
      $background = "background=\"$background\"";
   echo "<body bgcolor=\"$bgcolor\" text=\"$text_color\" link=\"$link_color\" vlink=\"$vlink_color\" alink=\"$alink_color\" $background>\n\n";
}

$contenitore_finale = preg_split ('/,/',$contenitore);
for ($i=0;$i<count($contenitore_finale);$i++) {
   $contenitore_to_test = trim($contenitore_finale[$i]);
   if (!preg_match("/^[_\\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\\.)+[a-z]{2,3}$/", $contenitore_to_test)) {
      print_error("<b>Occorre un indirizzo email valido per continuare ($contenitore_to_test) </b>");
   }
}
if ($required)
   $require = $required;

if ($require) {
  
   $require = ereg_replace( " +", "", $require);
   $required = split(",",$require);
   for ($i=0;$i<count($required);$i++) {
      $string = trim($required[$i]);
   
      if((!(${$string})) || (!(${$string}))) {
       
         if ($missing_fields_redirect) {
            header ("Location: $missing_fields_redirect");
            exit;
         }
         $require;
         $missing_field_list .= "<b>Non trovato: $required[$i]</b><br>\n";
      }
   }
   
   if ($missing_field_list)
      print_error($missing_field_list,"missing");
}

if (($email) || ($EMAIL)) {
   $email = trim($email);
   if ($EMAIL)
      $email = trim($EMAIL);
   if (!eregi("^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,3}$", $email)) {
      print_error("il suo <b>indirizzo email</b> non è valido");
   }
   $EMAIL = $email;
}


$content = parse_form($_POST, $sort);
$content_html = parse_form_html($_POST, $sort);

if ($invia_Dati) {
   $invia_Dati = ereg_replace( " +", "", $invia_Dati);
   $splitta_Dati = split(",",$invia_Dati);
   $content .= "\n------ variabili utente ------\n";
   for ($i=0;$i<count($splitta_Dati);$i++) {
      $string = trim($splitta_Dati[$i]);
      if ($splitta_Dati[$i] == "REMOTE_HOST")
         $content .= "REMOTE HOST: ".$REMOTE_HOST."\n";
      else if ($splitta_Dati[$i] == "REMOTE_USER")
         $content .= "REMOTE USER: ". $REMOTE_USER."\n";
      else if ($splitta_Dati[$i] == "REMOTE_ADDR")
         $content .= "REMOTE ADDR: ". $REMOTE_ADDR."\n";
      else if ($splitta_Dati[$i] == "HTTP_USER_AGENT")
         $content .= "BROWSER: ". $HTTP_USER_AGENT."\n";
   }
}


if (!$titolo)
   $titolo = "Modulo dal sito";

mail_it(stripslashes($content), stripslashes($titolo), $email, $contenitore);

// var_dump($content);exit;
   // setlocale(LC_ALL, "");
   // setlocale(LC_ALL, 'nl_NL');
   setlocale(LC_ALL, 'it_IT.UTF-8');    // Italiano
    date_default_timezone_set("Europe/Rome");  // Ora
   $data=strftime('%e %B %Y');
   $dataora=date('H:i:s');
   print "<body bgcolor=\"$bgcolor\">

<p align='center'><font face='Verdana' size='2' color=\"$text_color\"><h1 align='centre'>$title</h1>
</p>
<p align='center' style='background-color: #f2f2f2;'><font face='Verdana' size='2' color=\"$text_color\">I seguenti dati inseriti nel modulo sono stati invitati correttamente all'indirizzo 
$contenitore nel giorno $data alle ore $dataora<br><br></font></p>
<p align='center'><font face='Verdana' size='2' color=\"$text_color\">$content_html</font></p>

<p align='center'>&nbsp;</p>

</body>
";
   echo "<br><br>\n";

