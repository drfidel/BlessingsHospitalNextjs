import React from 'react'
import ServicesOffered from '../src/components/services'

export default function services() {
  return (
    <div>
      <section className="breadcrumb_part breadcrumb_bg">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="breadcrumb_iner">
                    <div className="breadcrumb_iner_item">
                    <h2>Services</h2>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <ServicesOffered/>
    </div>
  )
}
