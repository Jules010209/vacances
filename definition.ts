const definition:RegEx = 'A/d`\|{=]}';

export class DEF() {
  constructor(args: string[]) {
    super(args);
  }
  
  public on(regex: RegEx) {
    return parse(regex);
  }
}


console.log(new DEF().on(definition));
