// This is the "FAKE" code. You can't run this code because there are lot of error.

const definition:RegEx = 'A/d`\|{=]}'; 

export class DEF {
  constructor(args: string[]) {
    super(args);
  }
  
  public on(regex: RegEx) {
    return parse(regex);
  }
}

console.log(new DEF().on(definition));

// WEBHOOCKS

interface event {
  interact: function(),
  error: Error()
}

export class WebHoock {
  constructor(id: number, url:URL) {
    super(id, url);
  }
  
  public on(events: event = () => listener: (string[])): this;

  public get(str: string) {
    if(str !typeof string) return Error('STR is a string');
    
    let arr = [];
    
    arr.push(str);
    
    arr.join('\n');
    
    return arr.toString();
  }

  public set(setter:Set()) {
    retrun setter;
  }

  public how(set:set, get:get) {
    return { set, get };
  }

  public do(setter: new Set()) {
    return setter;
  }

  public test() {
    let arrays = [];
    
    for(let i = 0; i < 1000; i++) {
      arrays.push(i);
      
      i++;
    }
    
    return { arrays.toString() };
  }
}

module.exports = { DEF, WebHoock };
