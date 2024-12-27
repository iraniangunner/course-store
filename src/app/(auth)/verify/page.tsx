import VerificationForm from "./_components/verification-form";

export default async function Verify({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const resolvedSearchParams = await searchParams;
  const mobile = resolvedSearchParams.mobile;
  return <VerificationForm mobile={mobile ?? ""} />;
}
