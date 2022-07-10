<?php
    header("Content-Type : text/xml");
    echo '<?xml version ="1.0" encoding ="UTF-8" standalone ="yes" ?>';
    echo '<response>';

        $name =$_GET{'name'};

        $username = array ("MASHA", "SANJANA", "NETHMI", "SUPUNI", "SADUNI", "AMAYA");

        if(in_array(strtoupper($name),$username)){
            echo "Hello, Welcome ".htmlentities($name). "! ";
        }

        elseif(trim($name==' ')){
            echo "We need your name. Please enter your name";
        }
        else{
            echo htmlentities($name).", Your not a member.";
        }

    echo '</response>'
?>