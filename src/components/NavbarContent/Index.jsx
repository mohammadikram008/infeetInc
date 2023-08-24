import React, { Fragment } from 'react'
import './Index.css'
import logo from '../images/infeet circle.jpeg'
const Index = () => {
    return (
        <Fragment>

            <div data-v-36dd144c="" class="mega-menu d-flex justify-content-center align-items-center">
                <div data-v-36dd144c="" class="main-container">
                    <div data-v-36dd144c="" class="row main-row">
                        <div data-v-36dd144c="" class="col-sm-2 col-10 title">
                            <a data-v-36dd144c="" href="/property" aria-current="page" class="nuxt-link-exact-active nuxt-link-active"> properties</a>
                        </div>
                        <div data-v-36dd144c="" class="col-sm-8 row list-container">
                            <div data-v-36dd144c="" class="item col-sm-3 col-10">
                                <ul data-v-36dd144c="" class="submenu list-unstyled">
                                    <h3 data-v-36dd144c="">UAE</h3>
                                    <li data-v-36dd144c="">
                                        <a data-v-36dd144c="" href="/property" class="entire-card-wrapper" id="view">
                                            <span >Abu Dubia</span>
                                        </a>
                                    </li>
                                    <li data-v-36dd144c="">
                                        <a data-v-36dd144c="" href="/property" class="entire-card-wrapper" id="view">
                                            <span data-v-36dd144c="">Umm Al Quwain</span>
                                        </a>
                                    </li>
                                    <li data-v-36dd144c="">
                                        <a data-v-36dd144c="" href="/property" class="entire-card-wrapper" id="view">
                                            <span data-v-36dd144c="">Ras Al Khaimah</span>
                                        </a>
                                    </li>
                                    <li data-v-36dd144c="">
                                        <a data-v-36dd144c="" href="/property" class="entire-card-wrapper" id="view">
                                            <span data-v-36dd144c="">Fujairah</span>
                                        </a>
                                    </li>
                                    <li data-v-36dd144c="">
                                        <a data-v-36dd144c="" href="/property" class="entire-card-wrapper" id="view">
                                            <span data-v-36dd144c="">Sharja </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div data-v-36dd144c="" class="item coverImage col-2 d-sm-flex align-items-center justify-content-center">
                            <img data-v-36dd144c="" src={logo} class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Index