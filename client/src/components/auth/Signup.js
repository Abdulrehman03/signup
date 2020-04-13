import React, { Fragment, useState, useEffect } from 'react';
import $ from 'jquery';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { registerHandler, loadUsers } from '../../actions/auth'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
// import  'materialize-css'
let usersName = [];

let counter = true



const Signup = ({ registerHandler, loadUsers, users }) => {


    var chip = {
        tag: 'chip content',
        image: '', //optional
    };



    useEffect(() => {
        if (counter == true) {
            loadUsers()
            counter = false;

        }
        let userData = {}
        if (users) {
            users.map((user) => {
                userData[user.name] = null
            })

            console.log(userData)
        }


        window.$('.register .chips').chips();
        window.$('.register .chips-initial').chips({
            data: [{
                tag: 'Apple',
            }, {
                tag: 'Microsoft',
            }, {
                tag: 'Google',
            }],
        });
        window.$('.register .chips-placeholder').chips({
            placeholder: 'Enter a tag',
            secondaryPlaceholder: '+Tag',
        });



        // props.data.users.forEach((user)=>{
        //     userData[user.name] = null
        // })
        window.$('.register .chips-autocomplete').chips({
            autocompleteOptions: {
                data: userData,
                limit: Infinity,
                minLength: 1
            }
        });

        console.log(window.$('.register .chips').chips())


        // We should get Chips array in this 
        // window.$('.register .chips').chips()[0].M_Chips.chipsData



    });
    const [check, setCheck] = useState({
        checked: true
    })
    const onCheck = () => {
        setCheck({ ...check, checked: !check.checked })
        console.log(check)

    }

    // const [chipsData, setChipsData] = useState({ chips: '' })
    // const setChip = (e) => {
    //     setChipsData({ ...chipsData, chips: e.taget.value })
    // }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        registerHandler(data)
        console.log(data)
    }


    return (
        <div className="register">

            <div class="row" >
                <div class="col s12 m7" id="registerMain">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div id="registerCard" class="card">
                            <div class="card-image">
                                <img src="card.jpg" />
                                <span class="card-title">Sign Up</span>
                            </div>

                            <div class="card-content" id="registerCardContent">
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="name" type="text" class="validate" name="name" ref={register({ required: true, minLength: 3 })} />
                                        <label for="name">Name</label>
                                        {errors.name && errors.name.type === 'required' && <span id="errors" class="helper-text" > This is Required</span>}
                                        {errors.name && errors.name.type === 'minLength' && <span id="errors" class="helper-text" > Name must contain Three letters</span>}
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate" name="email" ref={register({ required: true })} />
                                        <label for="email">Email</label>
                                       {errors.email && errors.email.type === 'required' && <span id="errors" class="helper-text" > This is Required</span>}
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate" name="password" ref={register({ required: true })} />
                                        <label for="password">Password</label>
                                       {errors.password && errors.password.type === 'required' && <span id="errors" class="helper-text" > This is Required</span>}
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="university" type="text" class="validate" name="university" ref={register({ required: true })} />
                                        <label for="university">University</label>
                                        {errors.university && errors.university.type === 'required' && <span id="errors" class="helper-text" > This is Required</span>}
                                    </div>
                                </div>

                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="rollnumber" type="number" class="validate" name="rollnumber" ref={register({ required: true })} />
                                        <label for="rollnumber">Roll Number</label>
                                        {errors.rollnumber && errors.rollnumber.type === 'required' && <span id="errors" class="helper-text" > This is Required</span>}
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="cnic" type="number" class="validate" name="cnic" ref={register({ required: true })} />
                                        <label for="cnic">CNIC</label>
                                        {errors.cnic && errors.cnic.type === 'required' && <span id="errors" class="helper-text" > This is Required</span>}
                                    </div>
                                </div>
                                <label>
                                    <input id="checkBox" type="checkbox" onClick={e => onCheck(e)} />
                                    <span>Request Group</span>
                                </label><br />
                                {check.checked == false &&
                                    <div>
                                        <div class="row" id="registerTextFields">
                                            <div class="input-field col s12">
                                                <input id="university" type="text" class="validate" name="groupName" ref={register({ required: true })} />
                                                <label for="university">Group Name</label>
                                    {errors.groupName && errors.groupName.type === 'required' && <span id="errors" class="helper-text" > This is Required</span>}
                                            </div>
                                        </div>

                                        <div class="chips chips-autocomplete"></div>
                                    </div>}



                            </div>
                            <div class="card-action" id="registerButton">

                                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                      <i class="material-icons right">send</i>
                                </button>
                            </div>
                            <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    users: state.auth.allUsers.users
})
export default connect(mapStateToProps, { registerHandler, loadUsers })(Signup)
