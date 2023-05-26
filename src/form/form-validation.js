import React from 'react'
import {useForm} from 'react-hook-form'

export default function FormValidation() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmitForm = (event) => {
       
    }
    const err = {fontSize: 'smaller', color:'red', marginTop:3}
  return (
    <div className="container mt-5 p-3 rounded" style={{width:'500px', background:'#cee'}}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" id="name" placeholder="กรอกชื่อสินค้า" name="name"
                {...register('name',{required:true, maxLength:30})}
                />
                {errors.name && <div style={err}>กรุณาระบุชื่อสินค้า</div>}
                <label for="name">ชื่อสินค้า</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <input type="number" class="form-control" id="price" name="price" step="any"
                {...register('price',{validate: value => parseFloat(value) > 0})}
                />
                {errors.price && <div style={err}>กรุณาระบุราคาสินค้า</div>}
                <label for="price">ราคาสินค้า</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
