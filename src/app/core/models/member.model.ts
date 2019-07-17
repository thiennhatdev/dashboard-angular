export class Member {
    public active : number;
    public name : string;
    public company  :string;
    public email : string;
    public joined : string;
    public link : string;
    constructor(active : number,
        name : string,
        company : string,
        email : string,
        joined : string,
        link : string
        ) {
            this.active = active;
            this.name = name;
            this.company = company;
            this.email = email;
            this.joined = joined;
            this.link = link;

    }
    

}