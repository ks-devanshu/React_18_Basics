import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import z from "zod";

type Form = {
    desc: string,
    amount: number,
    category: string
}

interface FormProps{
    onSubmit: (data:Form) => void;
}

function Form({onSubmit}:FormProps) {

    const schema = z.object({
        desc: z.string().min(3, {message:"Description should be at least 3 characters"}),
        amount: z.number('Amount is required').min(0, {message:"Must be greater than 0"}),
        category: z.string().min(2, {message:'Category is required'})
    });

    const { register, handleSubmit, formState:{errors}, reset } = useForm<Form>({resolver:zodResolver(schema)});
        
    return (
        <form onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
        })}>
            <div className="mb-3">
                <label htmlFor="desc">Description</label>
                <input {...register("desc")} id="desc" autoComplete="off" type="text" className="form-control"/>
                {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount">Amount</label>
                <input {...register("amount", {valueAsNumber: true})} step={0.01} id="amount" autoComplete="off" type="number" className="form-control"/>
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category">Category</label>
                <select {...register("category")} defaultValue="0" className="form-select" id="category">
                    <option value="0"></option>
                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
}

export default Form;