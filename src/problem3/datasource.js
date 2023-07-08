class Datasource {
    constructor() {
      this.prices = [];
      this.getPrices();
    }

    getPrices() {
      return fetch('https://interview.switcheo.com/test.json') // Replace with the actual JSON file URL
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch prices from the JSON file endpoint.');
          }
          return response.json();
        })
        .then(jsonData => {
          const prices = this.evaluate(jsonData.data.prices);
          this.prices = prices;
          return prices;
        })
        .catch(error => {
          throw error;
        });
    }

    // Manipulate the manipulation constant to what you need. Set to mid now
    midPrice(price) {
        const manipulationConstant = 2;
        return (price.buy + price.sell) / (manipulationConstant*100);
    }

    // Manipulate the quote price currency naming
    quotePrice(price) {
      return price.pair.slice(-3);
    }

    // Use this to change the mapping of each price within the array
    evaluate(prices) {
      return prices.map(price => ({
        ...price,
        mid: this.midPrice(price),
        quote: this.quotePrice(price)
      }));
    }
  }


  const ds = new Datasource();

  ds.getPrices()
    .then(prices => {
      prices.forEach(price => {
        console.log(`Mid price for ${price.pair} is ${ds.midPrice(price)} ${ds.quotePrice(price)}.`);
      });
    })
    .catch(error => {
      console.error(error);
    });
