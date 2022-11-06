const Engineer = require("../lib/Engineer")

describe("Engineer", () =>{
    describe("initialization", () =>{
        it("should it should create a new instance of Engineer", () => {

            const obj = new Engineer("Mabel", "01", "mabel@bagel.com", "https://github.com/bagel");

            expect(obj).toBeInstanceOf(Engineer)
        });

        it("should create and object with a name proerty",()=>{
            const obj = new Engineer("Mabel", "01", "mabel@bagel.com", "https://github.com/bagel");
            expect ("name" in obj).toEqual(true);
        })

        it("should create and object with an id property",()=>{
            const obj = new Engineer("Mabel", "01", "mabel@bagel.com", "https://github.com/bagel");
            expect ("id" in obj).toEqual(true);
        })

        it("should create and object with an email property",()=>{
            const obj = new Engineer("Mabel", "01", "mabel@bagel.com", "https://github.com/bagel");
            expect ("email" in obj).toEqual(true);
        })
    })

    describe("getGithub", () =>{
        it("should return the github property of the object",()=>{
            const obj = new Engineer("Mabel", "01", "mabel@bagel.com", "https://github.com/bagel");
            expect(obj.getGithub()).toEqual(obj.github)
        })
    })
    
    describe("getRole", () =>{
        it("should return the role of Engineer",()=>{
            const obj = new Engineer("Mabel", "01", "mabel@bagel.com", "https://github.com/bagel");
            expect(obj.getRole()).toEqual("Engineer")
        })
    })

})
