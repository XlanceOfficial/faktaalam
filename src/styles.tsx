const borderRadius = 4;

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
        p: 2
    },
    avatar: {
        width: 80,
        height: 80
    },
    parent: {
        bgcolor: 'divider',
        borderRadius,
        p: 2,
        maxWidth: 400
    },
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        color: 'text.primary'
    },
    button: {
        borderRadius,
        mt: 2,
        p: 2,
    },
    footer: {
        typography: 'caption',
        textAlign: 'center',
        mt: 2
    }
}

export default styles;