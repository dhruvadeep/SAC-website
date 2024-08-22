import React from 'react'
import LayoutLeft from '../../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../../Layout/LayoutRight/LayoutRight'
import BalCard from './BalCard/BalCard'
import RecentTrans from './RecentTrans/RecentTrans'
import PieChart from './PieChart/PieChart'

const Budget = () => {
    return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='budge' />
            </div>
            <div className='d-flex justify-content-center' style={{width:'calc(100% - 40rem)'}}>
            <div className='' style={{ width: '40rem', margin: '3rem 0rem', textAlign: 'justify' }}>
                <div className='calHead'>
                    <h1>More/Budget Tracking</h1>
                </div>
                <div className="budg d-flex flex-column my-5" style={{ backgroundColor: 'rgb(250 199 170)', width: 'inherit' }}>
                    <div className='expendi d-flex flex-row' style={{ width: '100%', padding: '1rem' }}>
                        <div className='bal d-flex flex-column gap-4' style={{ width: '50%', padding: '0rem 1rem' }}>
                            <BalCard type='Total Balance' />
                            <BalCard type='Total Income' />
                            <BalCard type='Total Expense' />
                        </div>
                        <div className='spend-summ' style={{ height: 'inherit', width: '50%', border: '2px solid white', borderRadius: '1rem', padding: '0.85rem', fontWeight: 'bold' }}>
                            <div>
                                {/* <p className='my-0'>Your Spending Summary</p> */}
                                <PieChart/>
                            </div>
                        </div>
                    </div>
                    <div className='recent-trans p-4'>
                    <RecentTrans/>
                    </div>
                </div>
            </div>
            </div>
            <div style={{ width: '20rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default Budget
