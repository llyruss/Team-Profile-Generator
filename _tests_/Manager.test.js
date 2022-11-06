const Manager = require("../lib/Manager")

describe("Manager", () =>{
    describe("initialization", () =>{
        it("should it should create a new instance of Manager", () => {

            const obj = new Manager("Mabel", "01", "mabel@bagel.com", "12345");

            expect(obj).toBeInstanceOf(Manager)
        });

        it("should create and object with a name proerty",()=>{
            const obj = new Manager("Mabel", "01", "mabel@bagel.com", "12345");
            expect ("name" in obj).toEqual(true);
        })

        it("should create and object with an id property",()=>{
            const obj = new Manager("Mabel", "01", "mabel@bagel.com", "12345");
            expect ("id" in obj).toEqual(true);
        })

        it("should create and object with an email property",()=>{
            const obj = new Manager("Mabel", "01", "mabel@bagel.com", "12345");
            expect ("email" in obj).toEqual(true);
        })
    })

    describe("getOfficeNumber", () =>{
        it("should return the officerNumber property of the object",()=>{
            const obj = new Manager("Mabel", "01", "mabel@bagel.com", "12345");
            expect(obj.getOfficeNumber()).toEqual(obj.officeNumber)
        })
    })
    
    describe("getRole", () =>{
        it("should return the role of Manager",()=>{
            const obj = new Manager("Mabel", "01", "mabel@bagel.com", "12345");
            expect(obj.getRole()).toEqual("Manager")
        })
    })

})
