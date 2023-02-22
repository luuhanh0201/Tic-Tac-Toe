function Content() {
    /**
      UseLayoutEffect
            1. Cập nhật state
            2. Cập nhật DOM (mutated)
            5. Render lại UI
            3. Gọi cleanup nếu deps thay đổi (sync)
            4. Gọi UseLayoutEffect callback (sync)
        UseLayoutEffect
            1. Cập nhật state
            2. Cập nhật DOM (mutated)
            3. Gọi cleanup nếu deps thay đổi (sync)
            4. Gọi UseLayoutEffect callback (sync)
            5. Render lại UI
     */
    return (<div>

    </div>);
}

export default Content;