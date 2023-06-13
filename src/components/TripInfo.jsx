import { Typography } from "@material-tailwind/react";

export default function TripInfo() {
    const postInfo = {
        creatorId: "12345",
        postTitle: "Trip to Japan",
        picturePath: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTY0NjV8MHwxfHNlYXJjaHw0fHxKYXBhbnxlbnwwfHx8fDE2ODYxMjIwOTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        location: "Japan",
        days: 5,
        schedule: [],
        likes: 0,
        Members: [],
        dates: [
            "2023/06/13",
            "2023/06/17"
        ],
        id: 2
    }


    return (
        <figure className="relative h-full w-full">
            <img
                className="h-full w-full aspect-[8/3] object-cover"
                src={postInfo.picturePath}
                alt="nature image"
            />
            <figcaption className="absolute bottom-4 left-2/4 flex w-[calc(100%-2rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-lg">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        {postInfo.postTitle}
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                        {postInfo.dates[0]} - {postInfo.dates[1]}
                    </Typography>
                </div>
                <Typography variant="h5" color="blue-gray">
                    Members
                </Typography>
            </figcaption>
        </figure>
    );
}