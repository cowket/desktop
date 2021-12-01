import React from 'react'
import { EuiFlexGrid, EuiFlexItem } from '@elastic/eui'

type LayoutProps = {
  teamRender?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, teamRender }) => {
  return (
    <EuiFlexGrid responsive={false}>
      <EuiFlexItem grow={false}>{teamRender}</EuiFlexItem>
      <EuiFlexItem grow={1}>
        channels
        {/* ? */}
      </EuiFlexItem>
      <EuiFlexItem grow={9}>{children}</EuiFlexItem>
    </EuiFlexGrid>
  )
}

Layout.defaultProps = {
  teamRender: null
}

export default Layout

/**
 * 3단 레이아웃
 * | 팀 영역 | 채널 및 다이렉트 메세지 영역 | 메세지 영역(프로필 클릭시 프로필 상세 등) |
 */
