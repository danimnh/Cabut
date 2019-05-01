<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $username = "";
    $password ="";
    $nama = "";
    $tanggal = "";
    $hobi = "";
    $domisili = "";
    $nomor = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $username = $request->username;
        $password = $request->password;
        $nama = $request->nama;
        $tanggal = $request->tanggal;
        $hobi = $request->hobi;
        $domisili = $request->domisili;
        $nomor = $request->nomor;
        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO profile (username, password, nama, tanggal, hobi, domisili, nomor ) VALUES ('$username', '$password', '$nama', '$tanggal', '$hobi', '$domisili', '$nomor') ");
            if($query_register){
         
                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404"
                 ); 
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        echo json_encode($data);
    }
?>