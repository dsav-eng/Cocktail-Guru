export class Cocktail {
    name: string;
    alcoholic: string;
    ingridients?: any[] = [];
    ingridMeasure?: any[] = [];
    instructions: string;
    image?: string;
  
    setName(data: any) {
      this.name = data[0].strDrink;
    }
  
    setIngridients(data: any) {
      for (const [key, value] of Object.entries(data[0])) {
        if (
          key.toString().includes('strIngredient') &&
          value != null &&
          value != ''
        )
          this.ingridients.push(value);
      }
      console.log('array of ingridients: ' + this.ingridients);
    }
  
    setMeasures(data: any) {
      for (const [key, value] of Object.entries(data[0])) {
        if (key.toString().includes('strMeasure') && value != null && value != '')
          this.ingridMeasure.push(value);
      }
      console.log('array of measures: ' + this.ingridMeasure);
    }
  
    setInstructions(data: any) {
      this.instructions = data[0].strInstructions;
    }
  
    setImage(data: any) {
      this.image = data[0].strDrinkThumb + '/preview';
    }
  }
  