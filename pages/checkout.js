import Layout from "../src/components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";

const Checkout = ({data}) => (
	<Layout>
		<div className="checkout container mx-auto my-32 px-4 xl:px-0">
			<h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
			
			{/* Payment Information Section */}
			<div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
				<h2 className="text-lg font-semibold mb-2">💎 Premium Support & Priority Processing</h2>
				<p className="text-gray-700 mb-3">
					For priority order processing and dedicated support, you can make a voluntary contribution to:
				</p>
				<div className="bg-white p-3 rounded border border-gray-200">
					<p className="text-sm text-gray-600 mb-1">USDT (BEP-20):</p>
					<code className="text-sm bg-gray-100 px-2 py-1 rounded break-all">
						0xbaff577411123e79088b128b1d382b75c8cce8cf
					</code>
				</div>
				<p className="text-xs text-gray-500 mt-2">
					* Voluntary contributions help us maintain and improve our services
				</p>
			</div>
			
			<CheckoutForm countriesData={data?.wooCountries ?? {}}/>
		</div>
	</Layout>
);

export default Checkout;

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_COUNTRIES
	});

	return {
		props: {
			data: data || {}
		},
		revalidate: 1
	};
}
