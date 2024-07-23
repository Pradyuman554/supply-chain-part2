import { useEffect, useState } from 'react';
import web3 from '../services/web3';
import supplyChain from '../services/supplyChain';

export default function Home() {
  const [parcelCount, setParcelCount] = useState(0);

  useEffect(() => {
    const getParcelCount = async () => {
      const count = await supplyChain.methods.nextParcelId().call();
      setParcelCount(count);
    };

    getParcelCount();
  }, []);

  const registerParcel = async () => {
    const accounts = await web3.eth.getAccounts();
    await supplyChain.methods.registerParcel(
      "Parcel 1",
      "This is a test parcel",
      "Location 1",
      "Service 1",
      3,
      ["Location 1", "Location 2", "Location 3"]
    ).send({ from: accounts[0] });
  };

  return (
    <div>
      <h1>Supply Chain</h1>
      <p>Total Parcels: {parcelCount}</p>
      <button onClick={registerParcel}>Register Parcel</button>
    </div>
  );
}
