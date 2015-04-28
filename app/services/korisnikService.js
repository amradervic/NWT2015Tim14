services.factory('korisnikFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/korisnici';
    var urlB = '/NWT2015Tim14/index.php/api/reset';
   factory.getKorisnici = function () {
        return $http.get(urlBase);
    };
    
    factory.getKorisnik = function (id) {
       return $http.get(urlBase + '/' + id);
        
    };

    factory.insertKorisnik = function (korisnik) {
        return $http.post(urlBase, korisnik);
    };

    factory.updateKorisnik = function (korisnik, id) {
        return $http.put(urlBase + '/' + id, korisnik);
    };

    factory.deleteKorisnik = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    factory.resetPassword = function (email) {
   //   return $http.get(urlB + '/' + email);
   // return $http.get(urlB);
            return $http({
                            method : 'GET',
                            url : urlB + '/' + email
                            
                        })
              .success(function(){ 
                  alert("Sifra je resetovana");
              })
              .error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
    }
/*
 * 
 * 
    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 */

     factory.registerKorisnik = function (korisnik) {
        //return $http.post(urlBase, korisnik);
        
         return $http({
                            method : 'POST',
                            url : urlBase,
                            data : korisnik
                        })
         //return $http.post(urlBase, korisnik)
        
           .success(function(){
            /*   $http({
                   
                type: "POST",
                url: "/NWT2015Tim14/sendmail.php/sendmail",
                data: { 
                    to:"kunalic.nadina@gmail.com",
                            subject:"Proba",
                            message: "hello <i>how are you.</i>",
                            name: "Shahid Shaikh" },
                success: function(msg){ 
                    alert('Success!');
                     }
               });
             /*  */
               
             var podaci= { 
                    to:"kunalic.nadina@gmail.com",
                            subject:"Probalal",
                            message: "hello <i>how are you.</i>",
                            name: "Shahid Shaikh",
                            korisnik: korisnik
                        };
     Object.toparams = function ObjecttoParams(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
};
$http({
    method: 'POST',
    url: '/NWT2015Tim14/customphpmail.php',
   // data:Object.toparams(podaci), 
    data:korisnik,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}

})
               
               
               
               
            /*   data={
                            'to':"kunalic.nadina@gmail.com",
                            'subject':"Probanova",
                            'message': "hello <i>how are you.</i>",
                            'name': "Shahid Shaikh"};
                            //$mailsend =   sendmail($to,$subject,$message,$name);
                           $http.post('/NWT2015Tim14/customphpmail.php',data);
                      // $http.post('/NWT2015Tim14/sendmail.php/sendmail', data);
                         */
                      alert("Korisnik je dodan");
                               
                           
                            
                            
                        })
                         .error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
    };
    return factory;
});


