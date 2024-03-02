/* eslint-disable no-unused-vars */

const StatusLabel = ({ status }: { status: string }) => {

  return (
    <div>{status}</div>
  )
}

const StatusTypes = {
  LowRiskSynergy: 'Low Risk & Synergy',
  caution: 'Caution',
  lowRiskNoSynergy: 'Low Risk & No Synergy',
  lowRiskDecrease: 'Low Risk & Decrease',
  unsafe: 'Unsafe',
  dangerous: 'Dangerous',
  unknown: 'Unknown'
}

export default StatusLabel