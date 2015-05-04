directive.directive('ngListofobjects',[ function(){
    
    return{
        
        template: '<h2>{{objekt.naziv}}</h2><h5>{{objekt.adresa}}</h5><p class="list-group-item-text">{{objekt.opis}}</p>'
    }
}])

