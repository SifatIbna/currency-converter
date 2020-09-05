/*
APIS
http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1
https://restcountries.eu/rest/v2/currency/${countryname}
*/
const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1');
        const rate = response.data.rates
        const euro = 1/rate[fromCurrency]
        const exchangeRate = euro * rate[toCurrency]

        return exchangeRate
    } catch (error){
        throw new Error(`Unable to convert ${fromCurrency} to ${toCurrency}`)

    }


}

const getCountries = async (toCurrency) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);

        return response.data.map(country => country.name)
    } catch (error){
        throw new Error(`Unable to find countries`)
    }

    //console.log(response.data[0].name)
}

const convertCurrency = async (fromCurrency, toCurrency, amount) =>{
    const exchangeRate = await getExchangeRate(fromCurrency,toCurrency);
    const countries = await getCountries(fromCurrency)

    const convertedAmount = (amount * exchangeRate).toFixed(2);
    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.You can spend this amount to this country ${countries}`
}

convertCurrency('USD',"EUR", 30)
    .then((message) => {
    console.log(message)
}).catch((error)=>{
    console.log(error.message)
})

