import React from 'react'

function Form(props){
    
    const { values, submit, change } = props
    
    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }

    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    return (
        <div>
            <form className='container' onSubmit={onSubmit}>
                <div className= 'container'>
                    <h2>Add New User</h2>
                    <button>Submit</button>
                   
                    
                </div>
                <div>
                    <label>
                    Name
                    <input
                        aria-label="Name"
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                    </label>
                    <br />
                    <label>
                        E-mail
                        <input
                            value={values.email}
                            onChange={onChange}
                            name="email"
                            type="text"
                        />
                    </label>
                    <br />
                    <label>
                        Password
                        <input
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            type="password"
                        />
                    </label>
                    <br />
                    <label>
                    Favorite Language
                        <select onChange={onChange} value={values.language} name="language">
                            <option value="">- Select an option -</option>
                            <option value="javascript">JavaScript</option>
                            <option value="c#">C#</option>
                            <option value="python">Python</option>
                            <option value="dos">DOS</option>
                            <option value="css">CSS</option>
                            <option value="java">Java</option>
                            <option value="ruby">Ruby</option>
                            <option value="basic">Basic</option>
                            <option value="c++">C++</option>
                            <option value="html">HTML</option>
                            <option value="blow">Blowing into a Nintendo cartridge</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    )
}
export default Form
