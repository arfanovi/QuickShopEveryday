// console.log('DUmmy Product')
/*
const url = 'https://dummyjson.com/products';


function dummyData(){
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
}
dummyData();

*/

const loadPhoneProduct = async (searchText, isShowAll) =>{
    const res = await fetch(`https://dummyjson.com/products?search=${searchText}`)
    const data  = await res.json();
    const phones = data.products;
    // console.log(phones)
    displayPhones(phones, isShowAll)
}


const displayPhones = (phones, isShowAll) => {
    // console.log(phones)

    // 1. 
    const phoneContainer = document.getElementById('phone-container')

    // Clear phone search 
    phoneContainer.textContent = '';

    // Display show all button if if if 
    const showALl = document.getElementById('showAll-button')
    if(phones.length > 12 && !isShowAll){
        showALl.classList.remove('hidden')
    }
    else{
        showALl.classList.add('hidden')
    }

    // Display only search product 
    // console.log(phones.length)


    if(!isShowAll){
        phones = phones.slice(0,10)
    }







    phones.forEach(phone =>{
        // console.log(phone)

        //2. Create a DIV
        const phoneCard = document.createElement('div')
        phoneCard.classList = `py-4 card  bg-gray-100 shadow-xl`;

        // 3. Set innerHTML 
        phoneCard.innerHTML = `
        <figure><img class='h-40 w-40 mr-4 rounded' src="${phone.images[1]}" alt="Products" /></figure>
        <div class="card-body">
          <h2 class="card-title text-2xl text-neutral-900	
          ">${phone.title}</h2>
          <p>${phone.brand}</p>
          <h2 class='text-2xl text-black'>${phone.price}$</h2>
          <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${phone.id}')"  class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `
        // 4. Append child *************
        phoneContainer.appendChild(phoneCard);
    })
    // hide spinner 
    toggleLoadingSpinner(false);
}


// Handle Show Details
const handleShowDetails = async ([id]) =>{
    // console.log('Clicked',id);

    // Load single phone data 
    const res = await fetch(`https://dummyjson.com/products/${[id]}`)
    const data = await res.json();
    // console.log(data);
    const phone = data.data;

    my_modal.showModal(phone);

}

const showProductDetails = (phone) =>{
    // console.log(phone);
    const productName = document.getElementById('namee');
    productName.innerText = phone.title;


    const showDetailContainer = document.getElementById('showDetailContainer');
    showDetailContainer.innerHTML = `
    <img src="${phone.images}" alt="">

    `

    my_modal.showModal();
}


// Now Search Product ****************
const handleSearch = (isShowAll) =>{

    // Spinner 
    toggleLoadingSpinner(true);



    const searchField = document.getElementById('searchInput');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhoneProduct(searchText, isShowAll)
}


const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loadingSpinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}



const showAllNow = (isShowAll) =>{
    handleSearch(true);
}

// loadPhoneProduct();