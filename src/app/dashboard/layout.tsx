export default function DasHBoardLayout({
    children,
    users,
    revenue,
    notify,
}: Readonly<{
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notify: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <div>{children}</div>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div>{users}</div>
                        <div>{revenue}</div>
                    </div>
                    <div
                        style={{ display: "flex", flex: 1 }}
                    >
                        {notify}
                    </div>
                </div>
            </div>
        </>
    );
}
