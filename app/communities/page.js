
import CommunityCard from "@/components/component/communityCard";

export default function Community() {
    return (
        <section className="bg-gray-900 py-12 md:py-16 xl:py-24 pt-[160px]">
            <div
                className="w-11/12 md:w-10/12 mx-auto grid gap-6 px-4 items-center justify-center text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">Community Partners</h2>
                    <p
                        className="mx-auto max-w-[600px] text-gray-500/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Meet our community partners.
                    </p>
                </div>
                <CommunityCard />
            </div>
        </section>
    )
}