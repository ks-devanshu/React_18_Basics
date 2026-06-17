import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {z} from 'zod';

function Form() {
    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const person = { name: '', age: 0 };

    // const { register, handleSubmit, formState:{errors} } = useForm();

    // const onSubmit = (event:FormEvent) => {
        // event.preventDefault();
        // if (nameRef.current !== null)
        //     person.name = nameRef.current.value;
        // if (ageRef.current !== null)
        //     person.age = parseInt(ageRef.current.value);
        // console.log(person);
    // }

    const onSubmit = (data:FieldValues) => console.log(data);


    const schema = z.object({
        name: z.string().min(3,{message:"You are a robot"}),
        age: z.number('Invalid Age').min(18)
    })

    
    const { register, handleSubmit, formState:{errors, isValid} } = useForm({resolver: zodResolver(schema)});
    
    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <div className="mb-3">
        //         <label htmlFor="name" className="form-label">Name</label>
        //         <input {...register("name")} type="text" /* ref={nameRef} */ autoComplete="off" id="name" className="form-control"/>
        //     </div>
        //     <div className="mb-3">
        //         <label htmlFor="age" className="form-label">Age</label>
        //         <input {...register("age")} type="number" /* ref={ageRef} */ id="age" className="form-control" />
        //     </div>
        //     <button type="submit" className="btn btn-primary">Submit</button>
        // </form>

        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <div className="mb-3">
        //         <label htmlFor="name" className="form-label">Name</label>
        //         <input {...register("name", {required: true, minLength: 3})} type="text" /* ref={nameRef} */ autoComplete="off" id="name" className="form-control"/>
        //         {errors.name?.type === 'required' && <p className="text-danger">Is a required field</p>}
        //         {errors.name?.type === 'minLength' && <p className="text-danger">Must be longer than 3 chars</p>}
        //     </div>
        //     <div className="mb-3">
        //         <label htmlFor="age" className="form-label">Age</label>
        //         <input {...register("age" , { min: 13, max: 90 })} type="number" /* ref={ageRef} */ id="age" className="form-control" />
        //         {errors.age?.type === 'min' && <p className="text-danger">Below 13 not allowed</p>}
        //         {errors.age?.type === 'max' && <p className="text-danger">Above 90 not allowed</p>}
        //     </div>
        //     <button type="submit" className="btn btn-primary">Submit</button>
        // </form>


        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register("name")} type="text" /* ref={nameRef} */ autoComplete="off" id="name" className="form-control"/>
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register("age", {valueAsNumber: true})} type="number" /* ref={ageRef} */ id="age" className="form-control" />
                {errors.age && <p className="text-danger">{errors.age.message}</p>}
            </div>
            <button disabled={!isValid} type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;