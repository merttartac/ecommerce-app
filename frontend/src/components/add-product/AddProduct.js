import React from 'react'

const AddProduct = () => {

    

    
    


    const randomizeField = (min, max) => {
        
        console.log(Math.random());
        
        return;
    };

    const generateModelSet = (iteration) => {
        
        const productNames = ['GT4', 'GT3', 'GT2', 'GT1'];
        const modelSet = [];

        let counter = 0;
        
        while (counter < iteration) {

            const model = {
                productName: '',
                productDescription: '',
                quantity: null,
                rating: null,
                price: null
            };

            for (let i = 0; i < productNames.length; i++) {
                let quantity = randomizeField(1, 100*(4-i))
                let rating = 5 * (1/quantity);
                
                model.productName = productNames[i];
                model.quantity = quantity;
                model.rating = rating;
                model.price = rating * 20000 * (4 - i);

                modelSet.push(model);
            }
            counter++;
        }

        console.log(modelSet);
        return;
    };

    return (
        <button type="button" onClick={() => randomizeField(2, 3)}>CreateDataSet</button>
    )
}

export default AddProduct;