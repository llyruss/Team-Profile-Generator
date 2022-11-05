const Employee = require("../lib/Employee")

describe("Employee", () =>{
    describe("initialization", () =>{
        it("should it should create a new instance of Employee", () => {

            const obj = new Employee("Mabel", "01", "mabel@bagel.com");

            expect(obj).toBeInstanceOf(Employee)
        });

        it("should create and object with a name prperty",()=>{
            const obj = new Employee("Mabel", "01", "mabel@bagel.com");
            expect ("name" in obj).toEqual(true);
        })

        it("should create and object with an id prperty",()=>{
            const obj = new Employee("Mabel", "01", "mabel@bagel.com");
            expect ("id" in obj).toEqual(true);
        })

        it("should create and object with an email prperty",()=>{
            const obj = new Employee("Mabel", "01", "mabel@bagel.com");
            expect ("email" in obj).toEqual(true);
        })
    })

    describe("getName", () =>{
        it("should return the name property of the object",()=>{
            const obj = new Employee("Mabel", "01", "mabel@bagel.com");
            expect(obj.getName()).toEqual(obj.name)
        })
    })
    
    describe("getId", () =>{
        it("should return the id property of the object",()=>{
            const obj = new Employee("Mabel", "01", "mabel@bagel.com");
            expect(obj.getId()).toEqual(obj.id)
        })
    })
    describe("getRole", () =>{
        it("should return the role of employee",()=>{
            const obj = new Employee("Mabel", "01", "mabel@bagel.com");
            expect(obj.getRole()).toEqual("Employee")
        })
    })

})
