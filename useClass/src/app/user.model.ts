export class User {
    public id: number;
    public name: string;

    public convertToUser(jsonObject: string | Object) {
        if(typeof jsonObject === "string") {
            return JSON.parse(jsonObject);
        } else {
            return jsonObject;
        }
    }
}