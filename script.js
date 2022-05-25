window.onload = function () {

    let a = document.getElementsByTagName('a');
    let products = new Array();
    let i = 0;
    let resultprice = 0;
    let find = false;
    
    //вешаем на него событие
    for (let c = 0; c < a.length; c++)
    {
    a[c].ondblclick = function() {
        let count = prompt("Введите количество товара", '1');
        if (count != null)
        {
        let id = a[c].id.slice(-1);
        let price = document.getElementById('total-price' + id).textContent.slice(0, document.getElementById('total-price' + id).textContent.indexOf(' р')).replace(' ', '');
        for (let j of products)
        {
            for (let g of j)
                if (g == a[c].textContent){
                    find = true;
                    break;
                }
        }
        if (find == false){
        products[i] = new Array(3);
        products[i][0] = a[c].textContent;
        products[i][1] = count;
        products[i][2] = Number(price)*count;
        var nodet = document.createElement('div');
        var node = document.createElement('span');
        node.innerHTML = products[i][0] + " " + products[i][1] + " шт. - " + products[i][2] + " руб." + "<br/>";
        document.getElementById('description').appendChild(nodet);
        nodet.appendChild(node);
        resultprice += products[i][2];
        i++;
        document.getElementById('trash_text').textContent = "";
        }
        else {
            find = false;
        }
        document.getElementById('allprice').textContent = "Итого: " + resultprice + " руб.";
        //предотвращаем переход по ссылке href
        return false;
    }
    }
}

    document.getElementById('trash').onclick = function () {
        resultprice = 0;
        document.getElementById('allprice').textContent = "Итого: " + resultprice + " руб.";
        delete products;
        products = new Array();
        i = 0;
        let elem = document.getElementById('description');
        while (elem.childElementCount > 1)
            elem.removeChild(elem.lastChild);
        document.getElementById('trash_text').innerHTML = "<h4>В коризне пусто!</h4>"; 
    }
}