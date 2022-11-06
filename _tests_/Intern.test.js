const Intern = require("../lib/Intern")

describe("Intern", () =>{
    describe("initialization", () =>{
        it("should it should create a new instance of Intern", () => {

            const obj = new Intern("Mabel", "01", "mabel@bagel.com", "Bagel University");

            expect(obj).toBeInstanceOf(Intern)
        });

        it("should create and object with a name proerty",()=>{
            const obj = new Intern("Mabel", "01", "mabel@bagel.com", "Bagel University");
            expect ("name" in obj).toEqual(true);
        })

        it("should create and object with an id property",()=>{
            const obj = new Intern("Mabel", "01", "mabel@bagel.com", "Bagel University");
            expect ("id" in obj).toEqual(true);
        })

        it("should create and object with an email property",()=>{
            const obj = new Intern("Mabel", "01", "mabel@bagel.com", "Bagel University");
            expect ("email" in obj).toEqual(true);
        })

        it("should create and object with a school property",()=>{
            const obj = new Intern("Mabel", "01", "mabel@bagel.com", "Bagel University");
            expect ("school" in obj).toEqual(true);
        })
    })

    describe("getSchool", () =>{
        it("should return the school property of the object",()=>{
            const obj = new Intern("Mabel", "01", "mabel@bagel.com", "Bagel University");
            expect(obj.getSchool()).toEqual(obj.school)
        })

        })
    
    describe("getRole", () =>{
        it("should return the role of Intern",()=>{
            const obj = new Intern("Mabel", "01", "mabel@bagel.com", "Bagel University");
            expect(obj.getRole()).toEqual("Intern")
        })
    })

})
