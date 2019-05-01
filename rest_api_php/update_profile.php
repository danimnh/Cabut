<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $id = "";
    $username = "";
    $password ="";
    $nama ="";
    $tanggal ="";
    $hobi ="";
    $domisili = "";
    $nomor = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->id;
        $username = $request->username;
        $password = $request->password;
        $nama = $request->nama;
        $tanggal = $request->tanggal;
        $hobi = $request->hobi;
        $domisili = $request->domisili;
        $nomor = $request->nomor;
        
        if($request){
            $query_register = mysqli_query($connect,"UPDATE profile SET username = '$username', 
                                                                        password = '$password',
                                                                        nama = '$nama', 
                                                                        tanggal = '$tanggal',
                                                                        hobi = '$hobi',
                                                                        domisili = '$domisili',
                                                                        nomor = '$nomor' 
                                                    WHERE id = '$id'");
            if($query_register){
         
                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404",
                     'errornih' => $query_register
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