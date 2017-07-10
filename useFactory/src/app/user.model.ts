export class User {
    public id: number;
    public name: string;

    constructor() {
        console.log("User");
    }

    public convertToUser(jsonObject: string | Object) {
        if(typeof jsonObject === "string") {
            return JSON.parse(jsonObject);
        } else {
            return jsonObject;
        }
    }
}