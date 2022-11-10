import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Addservice = () => {
    const handlerAddService=(event)=>{
        event.preventDefault()
        const from=event.target;
        const service_id=from.service_id.value
        const title=from.title.value
        const img=from.img.value
        const price=from.price.value
        const description=from.description.value

        const service={
            service_id,
            title,
            img,
            price,
            description
        }

    fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            from.reset()
            window.confirm('add your service')

          
        })
        .catch(error=>console.error(error))
    
    
    }
    return (
       
            <div className='my-5'>
                <h2 className='text-5xl'>Add Something If you want!!!</h2>
                <form onSubmit={handlerAddService}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-3 '>
            <input name='service_id' type="text" placeholder="Type here id" className="input input-bordered w-full" />
            <input name='title' type="text" placeholder="Type here title" className="input input-bordered w-full" />
            <input name='img' type="text" placeholder="Image Url" className="input input-bordered w-full" />
            <input name='price' type="text" placeholder="Type here price" className="input input-bordered w-full" />
            <input name='description' type="text" placeholder="Type here description" className="input input-bordered w-full" />
            </div>
              <input className='btn' type="submit" value="Add Service" />
            </form>
            </div>
       
    );
};

export default Addservice;