import React from 'react'
import './Createnote.css'

const Createnote = () => {
    return (
        <>
            <form className='w-50 mx-auto create-form'>
                <div class="mb-3">
                    <label for="title" class="form-label">Note Title</label>
                    <input type="text" name='title' class="form-control" id="title" />
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Write your note</label>
                    <textarea class="form-control" nmae="content" id="content" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-info">Create Note</button>
            </form>
        </>
    )
}

export default Createnote